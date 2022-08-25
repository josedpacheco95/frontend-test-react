export const request = async (data) => {
    const delay = () => new Promise(res => setTimeout(res, 1000));
    await delay();
    return data
}
