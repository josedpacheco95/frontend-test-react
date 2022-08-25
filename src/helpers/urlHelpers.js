export const getBaseUrl = () => {
    const url = `${window.location.href.split("/")[0]}//${window.location.href.split("/")[2]}`
    return url
}