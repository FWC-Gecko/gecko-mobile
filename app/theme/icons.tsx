import React from 'react';
import {Image} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Images from 'app/theme/images';

interface FontIconProps {
  color?: string;
  size?: number;
}

interface ImageIconProps {
  size: number;
}

export const CoinsIcon: React.FC<FontIconProps> = ({color, size}) => (
  <FontAwesomeIcon name="coins" color={color} size={size} />
);

export const GraphPieIcon: React.FC<FontIconProps> = ({color, size}) => (
  <FoundationIcon name="graph-pie" color={color} size={size} />
);

export const AccessPointIcon: React.FC<FontIconProps> = ({color, size}) => (
  <MaterialCommunityIcon name="access-point" color={color} size={size} />
);

export const SearchIcon: React.FC<FontIconProps> = ({color, size}) => (
  <IoniconsIcon name="search" color={color} size={size} />
);

export const ExportIcon: React.FC<FontIconProps> = ({color, size}) => (
  <FeatherIcon name="upload" color={color} size={size} />
);

export const FavoriteIcon: React.FC<FontIconProps> = ({color, size}) => (
  <FeatherIcon name="star" color={color} size={size} />
);

export const BackIcon: React.FC<FontIconProps> = ({color, size}) => (
  <IoniconsIcon name="chevron-back-outline" color={color} size={size} />
);

export const UpIcon: React.FC<FontIconProps> = ({color, size}) => (
  <AntDesignIcon name="caretup" color={color} size={size} />
);

export const DownIcon: React.FC<FontIconProps> = ({color, size}) => (
  <AntDesignIcon name="caretdown" color={color} size={size} />
);

export const PlusIcon: React.FC<FontIconProps> = ({color, size}) => (
  <AntDesignIcon name="plus" color={color} size={size} />
);

export const EllipsisIcon: React.FC<FontIconProps> = ({color, size}) => (
  <AntDesignIcon name="ellipsis1" color={color} size={size} />
);

export const BellIcon: React.FC<FontIconProps> = ({color, size}) => (
  <MaterialCommunityIcon name="bell" color={color} size={size} />
);

export const SwapVertIcon: React.FC<FontIconProps> = ({color, size}) => (
  <IoniconsIcon name="swap-vertical" color={color} size={size} />
);

export const CommentIcon: React.FC<FontIconProps> = ({color, size}) => (
  <FontAwesomeIcon name="comment" color={color} size={size} />
);

export const SyncIcon: React.FC<FontIconProps> = ({color, size}) => (
  <AntDesignIcon name="sync" color={color} size={size} />
);

export const HeartIcon: React.FC<FontIconProps> = ({color, size}) => (
  <FeatherIcon name="heart" color={color} size={size} />
);

export const BadgeIcon: React.FC<ImageIconProps> = ({size}) => (
  <Image source={Images.i_badge} style={{width: size, height: size}} />
);

export const BagIcon: React.FC<ImageIconProps> = ({size}) => (
  <Image source={Images.i_bag} style={{width: size, height: size}} />
);

export const BiArrowIcon: React.FC<ImageIconProps> = ({size}) => (
  <Image source={Images.i_bi_arrow} style={{width: size, height: size}} />
);

export const RoundIcon: React.FC<ImageIconProps> = ({size}) => (
  <Image source={Images.i_round} style={{width: size, height: size}} />
);

export const ChartIcon: React.FC<ImageIconProps> = ({size}) => (
  <Image source={Images.i_chart} style={{width: size, height: size}} />
);

export const DiamondIcon: React.FC<ImageIconProps> = ({size}) => (
  <Image source={Images.i_diamond} style={{width: size, height: size}} />
);
