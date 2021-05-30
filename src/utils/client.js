import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {
    this.accessToken = getToken()

  }

  onError = error => {}

 baseUrl = "	https://api.spotify.com/v1/"

  async getArtists() {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/

    const busca = await axios.get(this.baseUrl)
  

  }
}

export default SomosClient
