const servicesApi = 'http://localhost:7070/api/services'

export const getServices = async () => {
  try {
    const response = await fetch(servicesApi)

    if (response.ok) {
      const data = await response.json()
      return data
    }

    throw new Error(response.statusText)
  } catch (error) {
    console.error('GET_POSTS: ', error.message)
    alert('При получении списка постов произошла ошибка')
  }
}

export const getPost = async (postId) => {
  try {
    const response = await fetch(`${postsApi}/${postId}`)

    if (response.ok) {
      const data = await response.json()
      return data
    }

    throw new Error(response.statusText)
  } catch (error) {
    console.error('GET_POST: ', error.message)
    alert('При получении данных поста произошла ошибка')
  }
}
