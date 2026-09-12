import React from 'react';
import { Crown, Rocket, Bot, Star, Cat, GraduationCap, Zap, Trophy, User } from 'lucide-react';
import { getAvatarOption } from '../utils/studentProfiles';

interface StudentAvatarIconProps {
  avatarId: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const StudentAvatarIcon: React.FC<StudentAvatarIconProps> = ({
  avatarId,
  size = 'md',
  className = '',
}) => {
  const avatar = getAvatarOption(avatarId);

  const sizeClasses = {
    sm: 'w-7 h-7 rounded-lg text-xs',
    md: 'w-9 h-9 rounded-xl text-sm',
    lg: 'w-12 h-12 rounded-2xl text-base',
    xl: 'w-16 h-16 rounded-3xl text-xl',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  const renderIcon = () => {
    const iconClass = `${iconSizes[size]} ${avatar.textColor}`;
    switch (avatar.icon) {
      case 'Crown':
        return <Crown className={iconClass} />;
      case 'Rocket':
        return <Rocket className={iconClass} />;
      case 'Bot':
        return <Bot className={iconClass} />;
      case 'Star':
        return <Star className={iconClass} />;
      case 'Cat':
        return <Cat className={iconClass} />;
      case 'GraduationCap':
        return <GraduationCap className={iconClass} />;
      case 'Zap':
        return <Zap className={iconClass} />;
      case 'Trophy':
        return <Trophy className={iconClass} />;
      default:
        return <User className={iconClass} />;
    }
  };

  return (
    <div
      className={`bg-gradient-to-br ${avatar.bgGradient} flex items-center justify-center shrink-0 shadow-xs border ${avatar.borderColor} ${sizeClasses[size]} ${className}`}
    >
      {renderIcon()}
    </div>
  );
};
