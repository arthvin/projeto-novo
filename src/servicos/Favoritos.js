import axios from "axios"

const FavoritoApi = axios.create({baseURL: "http://localhost:8000/favoritos" })

async function getFavoritos(){
    const response = await FavoritoApi.get('/')

    return response.data
}

async function postFavorito(id) {
   await FavoritoApi.post(`/${id}`)
}

async function deleteFavorito(id) {
    await FavoritoApi.delete(`/${id}`)
 }

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}