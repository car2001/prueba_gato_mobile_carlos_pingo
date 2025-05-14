import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';

export const EyeIcon = (props: any) => (
    <Feather name="eye" size={20} color="#888" {...props} />
);

export const EyeSlashIcon = (props: any) => (
    <Feather name="eye-off" size={20} color="#888" {...props} />
);

export const MailIcon = (props: any) => (
    <Feather name="mail" size={20} color="#888" {...props} />
)

export const HomeIcon = (props: any) => (
    <Feather name="home" size={20} color="#888" {...props} />
)

export const CalendarIcon = (props: any) => (
    <Feather name="calendar" size={20} color="#888" {...props} />
)

export const DocumentIcon = (props: any) => (
    <Ionicons name="documents-outline" size={20} color="#888" {...props} />
)

export const NotificationsIcon = (props: any) => (
    <Ionicons name="notifications-outline" size={20} color="#888" {...props} />
)

export const AddIcon = (props: any) => (
    <FontAwesome6 name="add" size={20} color="#888" {...props} />
)
