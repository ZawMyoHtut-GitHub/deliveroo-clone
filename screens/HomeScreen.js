import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Image, SafeAreaView, Text, View,TextInput, ScrollView } from 'react-native'
import tw from 'twrnc';
import SafeViewAndroid from '../styles/SafeViewAndroid';
import {AdjustmentsIcon, ChevronDownIcon,SearchIcon,UserIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useEffect(()=>{
        client.fetch(`
                *[_type == "featured"] {
                    ...,
                    restaurants[]->{
                        ...,
                        dishes[]->
                    }
                }
            `).then( data => setFeaturedCategories(data))
    },[])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    return (
        <SafeAreaView style={[tw`bg-white`,SafeViewAndroid.AndroidSafeArea]}>
            {/* Header */}
            <View style={tw`flex-row pb-3 items-center mx-4 mr-2`}>
                <Image 
                    source={{
                        uri:'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/4a14e7b2de7f6eaf5a6c98cb8c00b8de.png'
                    }}
                    style={[tw`h-8 w-8 bg-gray-300 p-4 rounded-full`]}
                />
                <View style={tw`flex-1`}>
                    <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
                    <Text style={tw`font-bold text-xl`}>
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB"/>
                    </Text>
                </View>
                <UserIcon size={30} color="#00CCBB"/>
            </View>

            {/* Search */}
            <View style={tw`flex-row items-center pb-2 mx-4`}>
                <View style={tw`flex-row flex-1 px-2 p-1 items-center bg-gray-200 mr-2`}>
                    <SearchIcon color="gray" size={20} style={{marginRight:5}}/>
                    <TextInput placeholder="Restaurants" keyboardType="default"/>
                </View>
                <AdjustmentsIcon color="#00CCBB"/>
            </View>

            {/* Body */}
            <ScrollView style={tw`bg-gray-50`}>
                {/* Categories */}
                <Categories/>
                    
                {/* Featuries */}
                {featuredCategories?.map((category)=>(
                    <FeaturedRow 
                        key={category._id}
                        id={category._id}
                        title={category.name} 
                        description={category.short_description}
                    />
                ))}
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
