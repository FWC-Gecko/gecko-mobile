import React from 'react';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

interface IconProps {
  color?: string;
  size?: number;
}

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
