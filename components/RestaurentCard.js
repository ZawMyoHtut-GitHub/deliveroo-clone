import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native'
import { LocationMarkerIcon } from 'react-native-heroicons/outline';
import { StarIcon } from 'react-native-heroicons/solid';
import tw from 'twrnc';
import { urlFor } from '../sanity';

const RestaurentCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={()=> {
        navigation.navigate(
          'Restaurant',
          {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
          }
        );
      }} 
      style={[tw`bg-white mr-4 mb-4`,styles.shadow]}
    >
      <Image
        source={{
            uri: urlFor(imgUrl).url()
        }}
        style={tw`w-64 h-36 rounded-sm`}
      />
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
        <View style={tw`flex-row items-center`}>
            <StarIcon color="green" opacity={0.5} size={22}/>
            <Text style={tw`text-xs text-gray-500 ml-2`}>
                <Text style={tw`text-green-500 `}>{rating}</Text> . {genre}
            </Text>
        </View>
        <View style={tw`flex-row items-center`}>
            <LocationMarkerIcon color="gray" opacity={0.4} size={22}/>
            <Text style={tw`text-xs text-gray-500 ml-2`}>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurentCard

const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    }
})