import axios from 'axios'

const KEY = 'AIzaSyA9qFswW0SA_QqT86kPKWie2_gXx-V1BV4'

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

const params = {
  part: 'snippet',
  maxResult: 40,
  key: KEY,
  regionCode: 'JP',
  type: 'video',
}

export const fetchPopularData = async() => {
  return await youtube.get('videos', {
    params:{
      ...params,
      chart: 'mostPopular'
    }
  })
}

export const fetchSelectedData = async (id) => {
  return await youtube.get('video', {
    params:{
      ...params,
      id
    }
  })
}