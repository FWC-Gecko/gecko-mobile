import React, {useState, useRef} from 'react';
import {View, Text, Pressable} from 'react-native';
import PagerView from 'react-native-pager-view';

import ThemeContext from 'app/context/ThemeContext';

import styles from './styles';

interface PageProps {
  title: string;
  component: React.FC;
}

interface TopNavigationProps {
  pages: PageProps[];
  titleSize: number;
}

const TopNavigation: React.FC<TopNavigationProps> = ({
  pages,
  titleSize = 14,
}) => {
  const [pageNumber, setPageNumber] = useState(0);

  const pagerViewRef = useRef(null);
  const onPage = (page: number) => {
    if (pageNumber !== page) {
      setPageNumber(page);
      if (pagerViewRef.current) pagerViewRef.current.setPage(page);
    }
  };

  return (
    <ThemeContext.Consumer>
      {theme => (
        <View style={styles.container}>
          <View
            style={[
              styles.titleContainer,
              {backgroundColor: theme.colors.itembackground},
            ]}>
            {pages.map((page, index) =>
              index === pageNumber ? (
                <Pressable
                  key={index}
                  style={[
                    styles.activeTitleView,
                    {backgroundColor: theme.colors.subitembackground},
                  ]}
                  onPress={() => onPage(index)}>
                  <Text
                    style={[
                      styles.title,
                      {fontSize: titleSize},
                      {color: theme.colors.textcolor},
                    ]}>
                    {page.title}
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  key={index}
                  style={styles.titleView}
                  onPress={() => onPage(index)}>
                  <Text
                    style={[
                      styles.title,
                      {fontSize: titleSize},
                      {color: theme.colors.textcolor},
                    ]}>
                    {page.title}
                  </Text>
                </Pressable>
              ),
            )}
          </View>
          <PagerView
            style={styles.container}
            initialPage={pageNumber}
            onPageSelected={e => setPageNumber(e.nativeEvent.position)}
            ref={pagerViewRef}>
            {pages.map((page, index) => (
              <page.component key={index} />
            ))}
          </PagerView>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default TopNavigation;
