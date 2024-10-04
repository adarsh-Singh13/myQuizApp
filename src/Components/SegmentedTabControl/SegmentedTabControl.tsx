import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions, Platform, Dimensions, TouchableOpacity } from 'react-native'
import Colors from '../../Screens/Constants/Colour';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';


type SegmentedTabControlProps = {
    options: string[];
    selectedOption: string;
    onOptionSelected: (option: string) => void; 
};

const SegmentedTabControl: React.FC<SegmentedTabControlProps> = React.memo(
    ({options, selectedOption, onOptionSelected}) => {
        const {width: windowsWidth} = Dimensions.get('window');

        const internalPadding = 20;
        const widthOfEachSegment = windowsWidth -20;

        const optionsItemWidth = (widthOfEachSegment - internalPadding) / options.length; 

        const activeAnimStyle = useAnimatedStyle(() => {
            return {
                left: withTiming(optionsItemWidth * options.indexOf(selectedOption) + internalPadding/2),
            }
        }, [optionsItemWidth, selectedOption, options])


        return (
            <View style={[styles.mainContainer, {
                width: widthOfEachSegment,
                borderRadius: 8,
            }]}>
                <Animated.View 
                style={[{
                    width: optionsItemWidth,
                    paddingHorizontal: internalPadding/2                   
                }, 
                styles.selectedOptionContainer, 
                activeAnimStyle,
                ]}
                />
                {options.map((option, index)=>{
                     const isSelected = option === selectedOption;
                    return (
                        <TouchableOpacity 
                            onPress={ () => {onOptionSelected?.(option)}}
                            key={index}
                            style={[{
                                width: optionsItemWidth,
                            }, styles.labelContainer]}
                        >
                            <Text style={[styles.labelTxt, isSelected&&{color: 'blue'}]}>{option}</Text>
                        </TouchableOpacity>
                    )
                })}
                {/* </View> */}
            </View>
        )
    }
)

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        height: 55,
        // backgroundColor: 'green',
        backgroundColor: Colors.baseGrey05,
        paddingLeft: 1, 
        elevation: 3,
    },
    selectedOptionContainer: {
            position: 'absolute',
            borderRadius: 6,
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            paddingLeft: 12,
            // backgroundColor: 'red',
            shadowOpacity: 0.3,
            shadowRadius: 4,
            height: '78%',
            top: '10%',
            backgroundColor: Colors.backGroundBase,
            ...(Platform.OS === 'android' && { elevation: 3 }),
    }, 
    labelContainer: { 
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelTxt: {
        fontFamily: 'Cabin-SemiBold',
        letterSpacing: 1,
        fontSize: 16,
    }, 
})

export {SegmentedTabControl};