export const getPhotoRef = async (placename) => {
    const res = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${placename}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY}`)
    const result = await res.json()
   
    return result
}