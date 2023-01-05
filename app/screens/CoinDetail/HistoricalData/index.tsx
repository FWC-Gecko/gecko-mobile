import React, {useState} from 'react';
import {View, Pressable, Text} from 'react-native';

import Background from 'app/components/Background';
import UDPad from 'app/components/UDPad';

import {ChartIcon, BagIcon, BiArrowIcon, RoundIcon} from 'app/theme/icons';

import styles from './styles';

const PERIODS = ['1h', '24h', '7d', '30d', '90d', '1y'];

const HistoricalData: React.FC = () => {
  const [period, setPeriod] = useState(0);
  const onPeriod = (p: number) => setPeriod(p);
  return (
    <View style={styles.container}>
      {/* Period */}
      <View style={styles.periodContainer}>
        <Background mode="gradient">
          <View style={styles.periodSmallContainer}>
            {PERIODS.map((p, index) => (
              <Pressable key={index} onPress={() => onPeriod(index)}>
                {period === index ? (
                  <Text style={styles.selectPeriod}>{p}</Text>
                ) : (
                  <Text style={styles.unSelectPeriod}>{p}</Text>
                )}
              </Pressable>
            ))}
          </View>
        </Background>
      </View>
      {/* Date */}
      <View style={styles.dateContainer}>
        <Background mode="gradient">
          <Text style={styles.dateText}>
            Dec 19,2022 15:30 - Dec 19, 2022 16:29 +0530
          </Text>
        </Background>
      </View>
      {/* Tiles */}
      <View style={styles.tilesContainer}>
        <View style={styles.tileLeftContainer}>
          <Background mode="gradient">
            <View style={styles.tileSmallContainer}>
              <BagIcon size={36} />
              <Text style={styles.tileTitle}>Open / Close</Text>
              <Text style={styles.tileSubTitle}>$16,766.24 / $16,779.17</Text>
            </View>
          </Background>
        </View>
        <View style={styles.tileRightContainer}>
          <Background mode="gradient">
            <View style={styles.tileSmallContainer}>
              <BiArrowIcon size={36} />
              <Text style={styles.tileTitle}>High / Low</Text>
              <Text style={styles.tileSubTitle}>$16,782.02 / $16,764.09</Text>
            </View>
          </Background>
        </View>
      </View>
      <View style={styles.tilesContainer}>
        <View style={styles.tileLeftContainer}>
          <Background mode="gradient">
            <View style={styles.tileSmallContainer}>
              <RoundIcon size={36} />
              <Text style={styles.tileTitle}>Change</Text>
              <View style={styles.tileSubTitle}>
                <UDPad value={12.93} prefix="$" />
              </View>
            </View>
          </Background>
        </View>
        <View style={styles.tileRightContainer}>
          <Background mode="gradient">
            <View style={styles.tileSmallContainer}>
              <ChartIcon size={36} />
              <Text style={styles.tileTitle}>Volume</Text>
              <Text style={styles.tileSubTitle}>$12.57 Bn</Text>
            </View>
          </Background>
        </View>
      </View>
    </View>
  );
};

export default HistoricalData;
