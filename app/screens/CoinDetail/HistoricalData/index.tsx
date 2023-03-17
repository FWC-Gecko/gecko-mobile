import React, {useState} from 'react';
import {View, Pressable, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {IThemeState} from 'app/models/reducers/theme';

interface IState {
  themeReducer: IThemeState;
}

import UDPad from 'app/components/UDPad';

import {
  ChartDarkIcon,
  BagDarkIcon,
  BiArrowDarkIcon,
  RoundDarkIcon,
  ChartLightIcon,
  BagLightIcon,
  BiArrowLightIcon,
  RoundLightIcon,
} from 'app/theme/icons';

import ThemeContext from 'app/context/ThemeContext';

import styles from './styles';

const PERIODS = ['1h', '24h', '7d', '30d', '90d', '1y'];

const HistoricalData: React.FC = () => {
  const [period, setPeriod] = useState(0);
  const onPeriod = (p: number) => setPeriod(p);

  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  return (
    <ThemeContext.Consumer>
      {theme => (
        <View style={styles.container}>
          {/* Period */}
          <View
            style={[
              styles.periodContainer,
              {backgroundColor: theme.colors.itembackground},
            ]}>
            <View style={styles.periodSmallContainer}>
              {PERIODS.map((p, index) => (
                <Pressable key={index} onPress={() => onPeriod(index)}>
                  {period === index ? (
                    <Text
                      style={[
                        styles.selectPeriod,
                        {
                          backgroundColor: theme.colors.subitembackground,
                          color: theme.colors.textcolor,
                        },
                      ]}>
                      {p}
                    </Text>
                  ) : (
                    <Text
                      style={[
                        styles.unSelectPeriod,
                        {color: theme.colors.textcolor},
                      ]}>
                      {p}
                    </Text>
                  )}
                </Pressable>
              ))}
            </View>
          </View>
          {/* Date */}
          <View
            style={[
              styles.dateContainer,
              {backgroundColor: theme.colors.elementbackground},
            ]}>
            <Text style={[styles.dateText, {color: theme.colors.textcolor}]}>
              Dec 19,2022 15:30 - Dec 19, 2022 16:29 +0530
            </Text>
          </View>
          {/* Tiles */}
          <View style={styles.tilesContainer}>
            <View
              style={[
                styles.tileLeftContainer,
                {backgroundColor: theme.colors.elementbackground},
              ]}>
              <View style={styles.tileSmallContainer}>
                {isDark ? (
                  <BagDarkIcon size={36} />
                ) : (
                  <BagLightIcon size={36} />
                )}
                <Text
                  style={[styles.tileTitle, {color: theme.colors.textcolor}]}>
                  Open / Close
                </Text>
                <Text style={styles.tileSubTitle}>$16,766.24 / $16,779.17</Text>
              </View>
            </View>
            <View
              style={[
                styles.tileRightContainer,
                {backgroundColor: theme.colors.elementbackground},
              ]}>
              <View style={styles.tileSmallContainer}>
                {isDark ? (
                  <BiArrowDarkIcon size={36} />
                ) : (
                  <BiArrowLightIcon size={36} />
                )}
                <Text
                  style={[styles.tileTitle, {color: theme.colors.textcolor}]}>
                  High / Low
                </Text>
                <Text style={styles.tileSubTitle}>$16,782.02 / $16,764.09</Text>
              </View>
            </View>
          </View>
          <View style={styles.tilesContainer}>
            <View
              style={[
                styles.tileLeftContainer,
                {backgroundColor: theme.colors.elementbackground},
              ]}>
              <View style={styles.tileSmallContainer}>
                {isDark ? (
                  <RoundDarkIcon size={36} />
                ) : (
                  <RoundLightIcon size={36} />
                )}
                <Text
                  style={[styles.tileTitle, {color: theme.colors.textcolor}]}>
                  Change
                </Text>
                <View style={styles.tileSubTitle}>
                  <UDPad value={12.93} prefix="$" />
                </View>
              </View>
            </View>
            <View
              style={[
                styles.tileRightContainer,
                {backgroundColor: theme.colors.elementbackground},
              ]}>
              <View style={styles.tileSmallContainer}>
                {isDark ? (
                  <ChartDarkIcon size={36} />
                ) : (
                  <ChartLightIcon size={36} />
                )}
                <Text
                  style={[styles.tileTitle, {color: theme.colors.textcolor}]}>
                  Volume
                </Text>
                <Text style={styles.tileSubTitle}>$12.57 Bn</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default HistoricalData;
