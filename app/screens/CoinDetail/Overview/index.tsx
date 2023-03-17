import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';

import {SwapVertIcon, BellIcon, BadgeIcon} from 'app/theme/icons';

import PercentPad from 'app/components/PercentPad';
import CustomAvatar from 'app/components/CustomAvatar';
import RoundButton from 'app/components/RoundButton';
import UDPad from 'app/components/UDPad';

import ThemeContext from 'app/context/ThemeContext';

import styles from './styles';

const PERIODS = ['1h', '24h', '7d', '30d', '90d', '1y', 'All'];

const customLabel = (val: string) => (
  <Text style={styles.customChartLabel}>{val}</Text>
);

const Overview: React.FC = () => {
  const [period, setPeriod] = useState(PERIODS[0]);

  const onPeriod = (p: string) => {
    setPeriod(p);
  };
  const data = [
    {
      value: 10,
      labelComponent: () => customLabel('1 Nov'),
    },
    {
      value: 15,
      labelComponent: () => customLabel('2 Nov'),
    },
    {
      value: 50,
      labelComponent: () => customLabel('3 Nov'),
    },
    {
      value: 41,
      labelComponent: () => customLabel('4 Nov'),
    },
    {
      value: 75,
      labelComponent: () => customLabel('5 Nov'),
    },
    {
      value: 18,
      labelComponent: () => customLabel('6 Nov'),
    },
  ];
  const data1 = [
    {
      value: 5,
      labelComponent: () => customLabel('1 Nov'),
    },
    {
      value: 7,
      labelComponent: () => customLabel('2 Nov'),
    },
    {
      value: 25,
      labelComponent: () => customLabel('3 Nov'),
    },
    {
      value: 20,
      labelComponent: () => customLabel('4 Nov'),
    },
    {
      value: 35,
      labelComponent: () => customLabel('5 Nov'),
    },
    {
      value: 9,
      labelComponent: () => customLabel('6 Nov'),
    },
  ];
  return (
    <ThemeContext.Consumer>
      {theme => (
        <View style={styles.container}>
          {/* Price Content */}
          <View style={styles.priceContainer}>
            <View style={styles.priceLeftSide}>
              <Text style={styles.priceTextOne}>Tether</Text>
              <Text
                style={[
                  styles.priceTextThree,
                  {color: theme.colors.textcolor},
                ]}>
                $1.000
              </Text>
              <View style={styles.priceLeftSmallSide}>
                <SwapVertIcon color="#C2C2C2" />
                <Text style={styles.priceTextOne}>0.00005954</Text>
                <UDPad value={177.32} suffix="%" />
              </View>
            </View>
            <View style={styles.priceRightSide}>
              <TouchableOpacity>
                <View
                  style={[
                    styles.priceRightSmallSide,
                    {backgroundColor: theme.colors.itembackground},
                  ]}>
                  <BellIcon color="#5B46DF" size={16} />
                </View>
              </TouchableOpacity>
              <PercentPad value={0.01} />
            </View>
          </View>
          {/* Chart */}
          <View style={styles.chartContainer}>
            {/* Period */}
            <View style={styles.periodContainer}>
              {PERIODS.map((p, index) =>
                period === p ? (
                  <Text
                    key={index}
                    style={[
                      styles.selectPeriod,
                      {
                        backgroundColor: theme.colors.itembackground,
                        color: theme.colors.itemcolor,
                      },
                    ]}>
                    {p}
                  </Text>
                ) : (
                  <Pressable key={index} onPress={() => onPeriod(p)}>
                    <Text
                      style={[
                        styles.unSelectPeriod,
                        {color: theme.colors.itemcolor},
                      ]}>
                      {p}
                    </Text>
                  </Pressable>
                ),
              )}
            </View>
            {/* Chart */}
            <View style={styles.chart}>
              <View style={styles.chartSmall}>
                <LineChart
                  thickness={2}
                  color="#FF2CDF"
                  color2="#56acce"
                  maxValue={100}
                  noOfSections={6}
                  areaChart
                  xAxisLabelTextStyle={{color: theme.colors.textcolor}}
                  yAxisTextStyle={{color: theme.colors.textcolor}}
                  data={data}
                  data2={data1}
                  startFillColor="#5200FF"
                  endFillColor="#FEF0EE"
                  startOpacity={0.3}
                  endOpacity={0.01}
                  spacing={70}
                  rulesType="solid"
                  initialSpacing={10}
                  hideDataPoints
                  hideRules
                  xAxisColor="#FFFFFF00"
                  yAxisColor="#FFFFFF00"
                />
              </View>
            </View>
          </View>
          {/* Bottom */}
          <View style={styles.priceLeftSmallSide}>
            <CustomAvatar
              title="Football World Community"
              subtitle="1.9M Followers"
              titleSize={14}
              subtitleSize={10}
              Stick={() => <BadgeIcon size={16} />}
            />
            <View style={styles.bottomRightSide}>
              <RoundButton title="+ Follow" onPress={() => {}} />
            </View>
          </View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default Overview;
