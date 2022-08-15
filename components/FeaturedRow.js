import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import tw from 'twrnc';
import client from '../sanity';
import RestaurentCard from './RestaurentCard';

const FeaturedRow = ({id,title,description}) => {

    const [ restaurants,setRestaurants ] = useState([]);

    useEffect(()=>{
        client.fetch(`
            *[_type == "featured" && _id == $id] {
                ...,
                restaurants[]->{
                    ...,
                    dishes[]->,
                    type->{
                        name
                    }
                },
            }[0]
        `,{id}).then(data=> setRestaurants(data?.restaurants))
    },[])
    
    return (
        <View >
            <View style={tw`flex-row items-center justify-between mt-4 px-4`}>
                <Text style={tw`font-bold text-lg`}>{title}</Text>
                <ArrowRightIcon color="#00CCBB"/>
            </View>
            <Text style={tw`px-4 text-xs text-gray-500 `}>{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal:15,
                }}
                showsHorizontalScrollIndicator={false}
                style={tw`pt-4`}
            >
                {/* RestaurantCards */}                
                {restaurants?.map(restaurant=>(
                    <RestaurentCard  
                        key={restaurant._id}          
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}
                
            </ScrollView>

        </View>
    )
}

export default FeaturedRow