const API = ['AccountManagement', 'MenuManagement']

export default function selectAPI(apiName, apiFunction) {
  if (API.includes(apiName)) {
    import(`./${apiName}`)
  }
}
