import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import CustomAvatar from 'app/components/CustomAvatar';
import BBButton from 'app/components/BBButton';

import {CommentIcon, SyncIcon, HeartIcon, EllipsisIcon} from 'app/theme/icons';

import ThemeContext from 'app/context/ThemeContext';

import styles from './styles';

interface CommentProps {}

const Comment: React.FC<CommentProps> = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <View style={styles.container}>
          <View
            style={[
              styles.contentContainer,
              {backgroundColor: theme.colors.elementbackground},
            ]}>
            <CustomAvatar
              title="Olive Yew"
              subtitle="@Olive Yew - 18 Dec"
              Stick={() => <BBButton mode="bullish" color="dark" />}
            />
            <Text style={[styles.description, {color: theme.colors.textcolor}]}>
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
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default Comment;
