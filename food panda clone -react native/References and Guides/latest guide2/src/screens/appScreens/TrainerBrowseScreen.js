import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
    Image,
    ImageBackground,
    Pressable,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';
import Search from '../../components/Search';
import TopTrainers from '../../components/TopTrainers';
import Background from "../../assets/background.jpg"
import Bicycle from "../../assets/bicycle.png"
import Boxing from "../../assets/box.png"
import Rope from "../../assets/rope.png"
import Swim from "../../assets/swim.png"
import Weight from "../../assets/weight.png"
import exercise from "../../assets/exercise.png"
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Icon from 'react-native-vector-icons/Ionicons';





const workouts = [
    { id: 1, icon: Weight, name: 'Weight' },
    { id: 2, icon: Bicycle, name: 'Bicycle' },
    { id: 3, icon: Rope, name: 'Rope' },
    { id: 4, icon: Swim, name: 'Swim' },
    { id: 5, icon: Boxing, name: 'Boxing' },
];

const TrainerBrowseScreen = () => {
    const windowWidth = useWindowDimensions().width;
    const [search, setSearch] = useState('');
    return (
        <ImageBackground source={Background} className="h-full">
            <SafeAreaView className="flex-1 ">
                <ScrollView className="flex-1 ">
                    <View className="flex flex-1 px-4">
                        <Header Name="Trainer" />

                        <Search
                            search={search}
                            setSearch={setSearch}
                            placeholder="Trainer, workout, etc"
                        />

                        {/* first Section */}
                        <View className="my-4 mb-[-30]" style={{ width: windowWidth }}>
                            <Text className="text-white">All Workouts </Text>
                            <ScrollView
                                horizontal
                                className="mt-3"
                                showsHorizontalScrollIndicator={false}>
                                {workouts.map((e, i) => (
                                    <View key={e.id} className="mr-6">
                                        <View className="w-14 h-14 bg-gray-50 rounded-xl justify-center items-center">
                                            <Image source={e.icon} />
                                        </View>
                                        <Text className=" text-gray-600  text-center my-2">
                                            {e.name}
                                        </Text>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>

                        {/* Second Section */}
                        <TopTrainers />

                        {/* Third Section */}
                        {/* <View className="my-">
                            <Text className="text-white font-semibold my-1">
                                Recommended Trainer
                            </Text>

                            <View className="rounded-xl bg-opacity-20 flex-row h-16">
                                <View className=" w-1/4 h-full ">
                                    <Image
                                        source={exercise}
                                        className="w-full h-full rounded-xl"
                                        resizeMode="cover"
                                    />
                                </View>
                                <View className="border border-white w-2/4 p-2">
                                    <Text className="text-white ">Dylan Meringue</Text>
                                    <Text className="text-gray-500 opacity-80 text-xs">
                                        Full Body
                                    </Text>
                                </View>
                                <View className="border border-white w-1/4 justify-center items-center">
                                    <Pressable className="h-8 w-full bg-red-600 rounded-3xl">
                                 
                                    </Pressable>
                                </View>
                            </View>
                        </View> */}
                        <View>
                            <Text className="text-white text-md mt-[-10]">Recommended Trainer </Text>
                        </View>
                        <ScrollView  >
                            {[1, 2, 3, 4].map(id => (
                                <View className="my-2 rounded-xl overflow-hidden" key={id}>
                                    <ImageBackground source={Background} resizeMode="cover">
                                        <View className="  flex-row ">
                                            <View>
                                                <Image source={exercise} />
                                            </View>
                                            <View className="p-4 mr-5">
                                                <Text className="text-white">Arm Muscle Workout</Text>

                                                <Text className="text-gray-400">Full body</Text>


                                            </View>
                                            <View className="bg-[#BE1721] p-2 px-5 flex-row my-6 rounded-full justify-center">
                                                <Icon name="chatbox-ellipses-outline" size={16} color="#fff" alignSelf="center" marginRight={5} />
                                                <Text className="text-white font-medium">Chat</Text>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default TrainerBrowseScreen;

const styles = StyleSheet.create({});