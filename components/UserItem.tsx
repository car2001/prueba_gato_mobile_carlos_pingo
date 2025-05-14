import React from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

import { EditIcon } from '@/lib/Icons';
import { User } from '@/models/user';
import Avatar from './Avatar';


type UserItemProps = {
    user: User;
    onPress: () => void;
};

export default function UserItem({ user, onPress }: UserItemProps) {
    return (
        <View style={styles.itemContainer}>
            <Avatar />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.dni}>{user.dni}</Text>
            </View>
            <View style={styles.actions}>
                <Switch value={user.active} />

                <TouchableOpacity style={styles.editButton} onPress={onPress}>
                    <EditIcon />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 20,
        borderRadius: 12,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 2,
    },
    dni: {
        color: '#666',
        fontSize: 14,
    },
    actions: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    editButton: {
        marginTop: 8,
        padding: 4,
    },
});
