import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Background from 'app/components/Background';
import CustomAvatar from 'app/components/CustomAvatar';

import {CommentIcon, SyncIcon, HeartIcon, EllipsisIcon} from 'app/theme/icons';

import styles from './styles';

interface CommentProps {}

const Comment: React.FC<CommentProps> = () => {
  return (
    <View style={styles.container}>
      <Background mode="gradient">
        <View style={styles.contentContainer}>
          <CustomAvatar title="Olive Yew" subtitle="@Olive Yew - 18 Dec" />
          <Text style={styles.description}>
            Lorem lpsum is simply dummy text Lorem lpsum is simply dummy text
            Lorem lpsum is simply dummy text Lorem lpsum is simply dummy text
          </Text>
          <View style={styles.readAllContainer}>
            <TouchableOpacity>
              <Text style={styles.readAll}>Read All</Text>
            </TouchableOpacity>
          </View>
          {/* Splitter */}
          <View style={styles.splitter} />
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.footerElement}>
                <CommentIcon color="#B9C1D9" size={14} />
                <Text style={styles.footerElementText}>4</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.footerElement}>
                <SyncIcon color="#B9C1D9" size={14} />
                <Text style={styles.footerElementText}>Report</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.footerElement}>
                <HeartIcon color="#B9C1D9" size={14} />
                <Text style={styles.footerElementText}>4</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <EllipsisIcon color="#B9C1D9" size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </Background>
    </View>
  );
};

export default Comment;
