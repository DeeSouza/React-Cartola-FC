import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default reducers => {
	const persistedReducer = persistReducer(
		{
			key: 'ReactCartolaFC',
			storage,
			whitelist: ['auth'], // Name Reducers
		},
		reducers
	);

	return persistedReducer;
};
