import React from 'react'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import SuggestionList from './components/SuggestionList'
import Footer from './components/Footer'
import * as tf from '@tensorflow/tfjs'
import { loadFrozenModel } from '@tensorflow/tfjs-converter'
import labels from './labels.json'
import mushrooms from './mushrooms.json'
import './App.css'

const MODEL_URL = '/model/tensorflowjs_model.pb'
const WEIGHTS_URL = '/model/weights_manifest.json'
const IMAGE_SIZE = 224

const loadModel = async () => {
  const model = await loadFrozenModel(MODEL_URL, WEIGHTS_URL)
  const input = tf.zeros([1, IMAGE_SIZE, IMAGE_SIZE, 3])
  model.predict({ Placeholder: input }) // MobileNet V2
  return model
}

const predict = async (img, model) => {
  const t0 = performance.now()
  const image = tf.fromPixels(img).toFloat()
  const resized = tf.image.resizeBilinear(image, [IMAGE_SIZE, IMAGE_SIZE])
  const offset = tf.scalar(255 / 2)
  const normalized = resized.sub(offset).div(offset)
  const input = normalized.expandDims(0)
  const output = await tf
    .tidy(() => model.predict({ Placeholder: input }))
    .data() // MobileNet V2
  const predictions = labels
    .map((label, index) => ({ label, accuracy: output[index] }))
    .sort((a, b) => b.accuracy - a.accuracy)
  const time = `${(performance.now() - t0).toFixed(1)} ms`
  return { predictions, time }
}

const getImage = file => {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.readAsDataURL(file)
  })
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { predictions: [] }
    this.onFileChange = this.onFileChange.bind(this)
  }

  async onFileChange(event) {
    if (!event.target.files.length) {
      return
    }

    const file = event.target.files[0]
    const img = document.getElementById('preview')
    const image = await getImage(file)
    img.setAttribute('src', image)

    const model = await loadModel()
    const { predictions, time } = await predict(img, model)
    console.log(time)
    this.setState({ predictions })
  }

  render() {
    const { predictions } = this.state
    const suggestions = predictions.slice(0, 5).map(({ label, accuracy }) => ({
      ...mushrooms[label],
      accuracy,
    }))

    return (
      <div className="App">
        <Header />
        <div style={{ textAlign: 'center' }}>
          <SearchForm onFileChange={this.onFileChange} />
          <img
            id="preview"
            src="./shroom.png"
            alt="preview"
            style={{ display: 'none', maxWidth: '20rem' }}
          />
          <SuggestionList suggestions={suggestions} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
