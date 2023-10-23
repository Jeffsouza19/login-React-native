import { style } from "./style";
import { View, Text, TextInput } from "react-native";

type Props = {
    placeholder: string,
    label: string,
    secure?: boolean,
    keyboard: any,
}
const Input = ({label, placeholder, secure, keyboard}: Props) => {
    return (
     <View style={style.container}>
         <Text style={style.label}>{label}</Text>
         <TextInput
             style={style.input}
             placeholder={placeholder}
             secureTextEntry={secure}
             keyboardType={keyboard}
         />
     </View>
    )
}

export default Input;