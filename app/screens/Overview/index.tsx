import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Pressable, Image} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';

import {
  SwapVertIcon,
  UpIcon,
  BellIcon,
  DownIcon,
  BadgeIcon,
} from 'app/theme/icons';

import PercentPad from 'app/components/PercentPad';
import CustomAvatar from 'app/components/CustomAvatar';
import RoundButton from 'app/components/RoundButton';
import Background from 'app/components/Background';

import Images from 'app/theme/images';

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
    <View style={styles.container}>
      {/* Price Content */}
      <View style={styles.priceContainer}>
        <View style={styles.priceLeftSide}>
          <Text style={styles.priceTextOne}>Tether</Text>
          <Text style={styles.priceTextThree}>$1.000</Text>
          <View style={styles.priceLeftSmallSide}>
            <SwapVertIcon color="#C2C2C2" />
            <Text style={styles.priceTextOne}>0.00005954</Text>
            <UpIcon color="#14C881" />
            <Text style={styles.priceTextTwo}>177.32%</Text>
          </View>
        </View>
        <View style={styles.priceRightSide}>
          <TouchableOpacity>
            <View style={styles.priceRightSmallSide}>
              <BellIcon color="#FF2CDF" size={16} />
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
              <Text key={index} style={styles.selectPeriod}>
                {p}
              </Text>
            ) : (
              <Pressable key={index} onPress={() => onPeriod(p)}>
                <Text style={styles.unSelectPeriod}>{p}</Text>
              </Pressable>
            ),
          )}
        </View>
        {/* Chart */}
        <View style={styles.chart}>
          <Background mode="gradient">
            <View style={styles.chartSmall}>
              <LineChart
                thickness={2}
                color="#FF2CDF"
                maxValue={100}
                noOfSections={6}
                areaChart
                yAxisTextStyle={styles.chartYAxis}
                data={data}
                data2={data1}
                color2={'#56acce'}
                startFillColor={'#FEF0EE'}
                endFillColor={'#FEF0EE'}
                startOpacity={0.2}
                endOpacity={0.01}
                spacing={80}
                rulesColor="gray"
                rulesType="solid"
                initialSpacing={10}
                hideDataPoints
                hideRules
                xAxisColor={'#FFFFFF00'}
                yAxisColor={'#FFFFFF00'}
              />
            </View>
          </Background>
        </View>
      </View>
      {/* Bottom */}
      <View style={styles.priceLeftSmallSide}>
        <CustomAvatar
          title="Football World Community"
          subtitle="1.9M Followers"
          titleSize={14}
          subtitleSize={10}
          Stick={() => <BadgeIcon />}
        />
        <View style={styles.bottomRightSide}>
          <RoundButton title="+ Follow" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default Overview;
