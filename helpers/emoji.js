import React from "react"
import { View } from "react-native"
import { Text } from "@ui-kitten/components"

export const RenderEmoji = ({id, size = 25}) => {

  if(id == ":)") return <Text style={{fontSize: size}}>&#128512;</Text>
  else if(id == "X(") return <Text style={{fontSize: size}}>&#128542;</Text>
  else if(id == ":|") return <Text style={{fontSize: size}}>&#128528;</Text>
  else if(id == ":(") return <Text style={{fontSize: size}}>&#128532;</Text>
  else if(id == ";)") return <Text style={{fontSize: size}}>&#128521;</Text>
  else return <Text style={{fontSize: size}}></Text>
}