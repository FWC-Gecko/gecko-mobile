import React from 'react';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconProps {
  color?: string;
  size?: number;
}

export const CoinsIcon: React.FC<IconProps> = ({color, size}) => (
  <FontAwesomeIcon name="coins" color={color} size={size} />
);

export const GraphPieIcon: React.FC<IconProps> = ({color, size}) => (
  <FoundationIcon name="graph-pie" color={color} size={size} />
);

export const AccessPointIcon: React.FC<IconProps> = ({color, size}) => (
  <MaterialCommunityIcon name="access-point" color={color} size={size} />
);

export const SearchIcon: React.FC<IconProps> = ({color, size}) => (
  <IoniconsIcon name="search" color={color} size={size} />
);

export const ExportIcon: React.FC<IconProps> = ({color, size}) => (
  <FeatherIcon name="upload" color={color} size={size} />
);

export const FavoriteIcon: React.FC<IconProps> = ({color, size}) => (
  <FeatherIcon name="star" color={color} size={size} />
);

export const BackIcon: React.FC<IconProps> = ({color, size}) => (
  <IoniconsIcon name="chevron-back-outline" color={color} size={size} />
);

export const UpIcon: React.FC<IconProps> = ({color, size}) => (
  <AntDesignIcon name="caretup" color={color} size={size} />
);

export const DownIcon: React.FC<IconProps> = ({color, size}) => (
  <AntDesignIcon name="caretdown" color={color} size={size} />
);

export const PlusIcon: React.FC<IconProps> = ({color, size}) => (
  <AntDesignIcon name="plus" color={color} size={size} />
);

export const EllipsisIcon: React.FC<IconProps> = ({color, size}) => (
  <AntDesignIcon name="ellipsis1" color={color} size={size} />
);
