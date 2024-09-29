import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function Quotes() {
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        const getQuotes = async () => {
            const response = await fetch('https://zenquotes.io/api/quotes');
            if (!response.ok) {
                console.log(response.statusText);
                return;
            }
            const data = await response.json();
            const obtainedQuotes = data.map(d => ({
                text: d.q,
                author: d.a
            }));
            setQuotes(obtainedQuotes);
        }
        getQuotes();
    }, []);

    const changeQuoteSelection = (item) => {
        const patchedQuotes = quotes.map(q => {
            if (q === item) {
                q.isSelected = !q.isSelected;
            }
            return q;
        })
        setQuotes(patchedQuotes);
    }


    return (
        <View style={{ flex: 1, height: '100%', marginTop: 50, marginHorizontal: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Quotes:</Text>
            {quotes.length === 0
                ? <Text>No quotes :(</Text>
                : <FlatList
                    data={quotes}
                    contentContainerStyle={styles.quotesContainer}
                    renderItem={({ item, index }) => (
                        <Pressable key={index} style={styles.cell} onPress={() => changeQuoteSelection(item)}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.quote}>{item.text}</Text>
                                <Text style={styles.author}>{item.author}</Text>
                            </View>
                            <View
                                style={{
                                    alignContent: 'flex-end',
                                    justifyContent: 'center',
                                    width: 16,
                                    marginLeft: 8,
                                }}>
                                {item.isSelected
                                    ? <MaterialIcons
                                        size={16}
                                        name='check'
                                        color='green' />
                                    : <></>
                                }
                            </View>
                        </Pressable>
                    )}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    quotesContainer: {
        marginHorizontal: 8
    },
    cell: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 4,
    },
    quote: {
        fontSize: 16,
        fontWeight: '600',
    },
    author: {
        fontSize: 14,
        color: 'grey',
    },
})