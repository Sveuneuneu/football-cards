import { IPlayer } from '../interfaces/player'
import { MOCK_PLAYER_DATA_DIMITRI_PAYET, MOCK_PLAYER_DATA_SAMUEL_GIGOT } from '../mocks/player'
import reducer, { INDEX_NOT_FOUND_ERROR_MESSAGE, INITIAL_FETCH_STATE, INITIAL_STATE, playerAdded, playerDeleted, playersFetched, playerUpdated } from './players'

describe('Reducer', () => {
    test('Should return the inital state', () => {
        expect(reducer(undefined, { type: undefined })).toEqual(INITIAL_STATE)
    })
})

describe('playersFetched', () => {
    test('Should fetch data if not already did', () => {
        expect(reducer(undefined, playersFetched())).toEqual(INITIAL_FETCH_STATE)
    })
    test('Should not fetch data if already did', () => {
        expect(reducer([INITIAL_FETCH_STATE[0]], playersFetched())).toEqual([INITIAL_FETCH_STATE[0]])
    })
})

describe('playerAdded', () => {
    test('Should add a player in the list', () => {
        const MOCK_PLAYER_TO_ADD: IPlayer = {
            ...MOCK_PLAYER_DATA_DIMITRI_PAYET,
            id: expect.any(String)
        }
        expect(reducer(undefined, playerAdded(MOCK_PLAYER_TO_ADD))).toEqual([
            MOCK_PLAYER_TO_ADD
        ])
    })
    // TODO adding with already existing data
})

describe('playerDeleted', () => {
    const MOCK_ITEM_TO_REMOVE: IPlayer = {
        ...MOCK_PLAYER_DATA_DIMITRI_PAYET,
        id: 'id1'
    }
    const MOCK_EXPECTED_STATE: IPlayer[] = [
        {
            ...MOCK_PLAYER_DATA_SAMUEL_GIGOT,
            id: 'id2'
        },
    ]
    const MOCK_INITIAL_STATE: IPlayer[] = [
        MOCK_ITEM_TO_REMOVE,
        ...MOCK_EXPECTED_STATE
    ]

    test('Should delete the item from the list', () => {
        expect(reducer(MOCK_INITIAL_STATE, playerDeleted(MOCK_ITEM_TO_REMOVE))).toEqual(MOCK_EXPECTED_STATE)
    })

    test('Should throw error as the player no exist in the list', () => {
        expect(() => reducer(MOCK_INITIAL_STATE, playerDeleted({
            ...MOCK_ITEM_TO_REMOVE,
            id: 'not existing id'
        }))).toThrow(INDEX_NOT_FOUND_ERROR_MESSAGE)
    })
})

describe('playerUpdated', () => {
    const MOCK_ITEM_TO_UPDATE: IPlayer = {
        ...MOCK_PLAYER_DATA_DIMITRI_PAYET,
        id: 'id1'
    }
    const MOCK_EXPECTED_STATE: IPlayer[] = [
        MOCK_ITEM_TO_UPDATE
    ]
    const MOCK_INITIAL_STATE: IPlayer[] = [
        {
            ...MOCK_PLAYER_DATA_SAMUEL_GIGOT,
            id: 'id1'
        }
    ]

    test('Should update the item from the list', () => {
        expect(reducer(MOCK_INITIAL_STATE, playerUpdated(MOCK_ITEM_TO_UPDATE))).toEqual(MOCK_EXPECTED_STATE)
    })

    test('Should throw error as the player no exist in the list', () => {
        expect(() => reducer(MOCK_INITIAL_STATE, playerDeleted({
            ...MOCK_ITEM_TO_UPDATE,
            id: 'not existing id'
        }))).toThrow(INDEX_NOT_FOUND_ERROR_MESSAGE)
    })
})