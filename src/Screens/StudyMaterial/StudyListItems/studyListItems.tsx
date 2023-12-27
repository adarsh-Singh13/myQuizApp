import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

/**
 * 
 * ? Local Imports
 */

import StudyMaterial from './studyMaterial';

const listData = [
    {
        iconName: "cart-outline",
        tabName: "Premium Study Materials",
        isShow: "true",
        size: 20,
    },
    {
        iconName: "notebook-outline",
        tabName: "Current Affairs",
        isShow: "false",
        size: 20,
    },
    {
        iconName: "email-alert-outline",
        tabName: "Job Alerts",
        isShow: "false",
        size: 20,
    },
    {
        iconName: "badge-account-horizontal-outline",
        tabName: "Daily Quiz",
        isShow: "false",
        size: 20,
    },
    {
        iconName: "file-pdf-box",
        tabName: "Free PDF",
        isShow: "false",
        size: 26,
    },
]

export default function StudyListItems () {
    const navigation = useNavigation();

    const handleOnTabPress = (tabName: string) => {
        switch (tabName) {
          case 'Premium Study Materials':
            navigation.navigate('PremiumStdyMat');
            break;
          case 'Current Affairs':
            navigation.navigate('CurrentAffairs');
            break;
          case 'Job Alerts':
            navigation.navigate('JobAlert');
            break;
          case 'Daily Quiz':
            navigation.navigate('DailyQuizList');
            break;
          case 'Free PDF':
            navigation.navigate('FreePdf');
            break;
          default:
            break;
        }
      };

    const renderStudyMaterial = ({ item }: any) => (
        <TouchableOpacity onPress={()=>handleOnTabPress(item.tabName)}>
            <StudyMaterial
          name={item.iconName}
          size={item.size}
          tabName={item.tabName}
          isShow={item.isShow}
        />
        </TouchableOpacity>
      );


  return (
    <View>
    <FlatList
      data={listData}
      renderItem={renderStudyMaterial}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
  )
}

const styles = StyleSheet.create({})