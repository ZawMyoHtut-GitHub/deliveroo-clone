import tw from 'twrnc';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import {useDispatch,useSelector} from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../features/basketsSlice';

const DishRow = ({id,name,description,price,image}) => {
    const [isPressed,setIsPressed] = useState(false)
    const dispatch = useDispatch()
    const items = useSelector(state=>selectBasketItemsWithId(state,id))

    const addTtemToBasket = ()=>{
        dispatch(addToBasket({id,name,description,price,image}))
    }

    const removeItemFromBasket = ()=>{
        if(!items.length>0)return;

        dispatch(removeFromBasket({id}))
    }

    return (
        <>
        <TouchableOpacity 
            onPress={()=>setIsPressed(!isPressed)}
            style={tw`bg-white border border-gray-200 p-4 ${isPressed ? 'border-b-0' : ''}`}
        >
            <View style={tw`flex-row`}>
                <View style={tw`flex-1`}>
                    <Text style={tw`text-lg mb-1`}>{name}</Text>
                    <Text style={tw`text-gray-400`}>{description}</Text>
                    <Text style={tw`text-gray-400 mt-2 font-bold`}>MMK {price}</Text>
                </View>
                <View>
                    <Image 
                        source={{uri:urlFor(image).url()}}
                        style={tw`h-20 w-20 bg-gray-300 p-4 border border-gray-200`}
                    />
                </View>
            </View>
        </TouchableOpacity>

        {isPressed && (
            <View style={tw`px-4 py-1`}>
                <View style={tw`flex-row items-center pb-3`}>
                    <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                        <MinusCircleIcon 
                            color={items.length>0 ? "#00CCBB": "gray"}
                            size={40}
                        />
                    </TouchableOpacity>

                    <Text style={tw`mx-4`}>{items.length}</Text>

                    <TouchableOpacity onPress={addTtemToBasket}>
                        <PlusCircleIcon 
                            color="#00CCBB"
                            size={40}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )}
        </>
    )
}

export default DishRow