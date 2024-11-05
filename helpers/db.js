import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export const DatabaseName = "@note_stash_app"

export const DatabaseInsert = async ({set, file, onSuccess, onFailure = () => null}) => {
  try {
    
    let items = []
    const files = await AsyncStorage.getItem(`${DatabaseName}:${set}`)
    if(files != undefined && files != "" && files != null) items = JSON.parse(files)
    if(!file.id) items.push({...file, id: uuid.v4()})
    else items.push(file)
    AsyncStorage.setItem(`${DatabaseName}:${set}`, JSON.stringify(items)).then(onSuccess)

  } catch (error) {
    console.log(error)
    onFailure(error)
  }
}

export const DatabaseRead = async ({set}) => {
  try {
    
    let items = []
    const files = await AsyncStorage.getItem(`${DatabaseName}:${set}`)
    if(files != undefined && files != "" && files != null) items = JSON.parse(files)
    return items

  } catch (error) {
    console.log(error)
    return []
  }
}

export const DatabaseGet = async ({set, id, file}) => {
  try {
    
    let items = []
    const files = await AsyncStorage.getItem(`${DatabaseName}:${set}`)
    if(files != undefined && files != "" && files != null) items = JSON.parse(files)
    
    let toUpdateItem = items[items.findIndex((item) => item.id == id)]
    if(toUpdateItem) return toUpdateItem
    console.log(items)
    console.log(toUpdateItem)

  } catch (error) {
    console.log(error)
    return []
  }
}

export const DatabaseUpdate = async ({set, id, file, onSuccess}) => {
  try {
    
    let items = []
    const files = await AsyncStorage.getItem(`${DatabaseName}:${set}`)
    if(files != undefined && files != "" && files != null) items = JSON.parse(files)
    console.log('before', items)
    let itemIndex = items.findIndex((item) => item.id == id)
    let toUpdateItem = items[itemIndex]
    if(toUpdateItem){
      items[itemIndex] = file
    }
    console.log('after', items)
    AsyncStorage.setItem(`${DatabaseName}:${set}`, JSON.stringify(items)).then(onSuccess)    

  } catch (error) {
    console.log(error)
    return []
  }
}

export const DatabaseCount = async ({set}) => {
  try {
    
    let items = []
    const files = await AsyncStorage.getItem(`${DatabaseName}:${set}`)
    if(files != undefined && files != "" && files != null) items = JSON.parse(files)
    return items.length

  } catch (error) {
    console.log(error)
    return ''
  }
}

export const DatabaseDelete = async ({set, id, onSuccess}) => {
  try {
    
    let items = []
    let filtered = []

    const files = await AsyncStorage.getItem(`${DatabaseName}:${set}`)
    if(files != undefined && files != "" && files != null) items = JSON.parse(files)
    
    items.map((item) => {
      if(item.id !== id) filtered.push(item)
    })

    console.log('original', items, items.length)
    console.log('retained', filtered, filtered.length)

    AsyncStorage.setItem(`${DatabaseName}:${set}`, JSON.stringify(filtered)).then(onSuccess)

  } catch (error) {
    console.log(error)
    return []
  }
}