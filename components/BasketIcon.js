import tw from 'twrnc';
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketsSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items=useSelector(selectBasketItems)
    const navigation=useNavigation()
    const basketTotal = useSelector(selectBasketTotal)
    return (
        <View style={tw`absolute bottom-5 w-full z-50`}>
            <TouchableOpacity 
                onPress={()=>navigation.navigate("Basket")}
                style={tw`mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center`}
            >
                <Text style={tw`text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 mr-4 rounded`}>{items.length}</Text>

                <Text style={tw`flex-1 text-white font-extrabold text-lg`}>View Basket</Text>

                <Text style={tw`text-white font-extrabold text-lg`}>{basketTotal} ks</Text>
            </TouchableOpacity>
        </View>
    )
    }

export default BasketIcon
// 2:43:25