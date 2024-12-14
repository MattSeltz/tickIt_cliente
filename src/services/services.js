export const getData = async uri => {
  try {
    const res = await fetch(`http://localhost:3001/${uri}`, {
      method:"GET"
    })

    if (res.ok) {
      const data = await res.json()

      return data
    } else {
      return false
    }
  } catch (error) {
    console.error(error)
  }
}

export const getOneData = async (uri,id) => {
  try {
    const res = await fetch(`http://localhost:3001/${uri}/${id}`, {
        method: "GET"
      })

    if (res.ok) {
      const data = await res.json()

      return data
    } else {
      return false
    }
  } catch (error) {
    console.error(error)
  }
}

export const postData = async (uri,body) => {
  try {
    const res = await fetch(`http://localhost:3001/${uri}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type":"application/json"
      }
    })

    if (res.ok) {
      const data = await res.json()

      return data
    } else {
      return false
    }
  } catch (error) {
    console.error(error)
  }
}

export const putData = async (uri,body,id) => {
  try {
    const res = await fetch(`http://localhost:3001/${uri}/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type":"application/json"
      }
    })

    if (res.ok) {
      const data = await res.json()

      return data
    } else {
      return false
    }
  } catch (error) {
    console.error(error)
  }
}

export const deleteData = async (uri,id) => {
  try {
    const res = await fetch(`http://localhost:3001/${uri}/${id}`, {
      method:"DELETE"
    })

    if (res.ok) {
      const data = await res.json()

      return data
    } else {
      return false
    }
  } catch (error) {
    console.error(error)
  }
}