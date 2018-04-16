import { FETCH_USER, UPDATE_USER } from "../actions/users";

export default function(state = null, { type, payload } = {}) {
  switch (type) {
    case FETCH_USER:
      return payload;
    case UPDATE_USER:
      return {
        ...state,
        profile: payload
      };
    default:
      return state;
  }
}


// insert into profiles (id, name, address, phone, type, field, chamber_of_commerce, country, city, link, email) values
//   (7, 'Codaissuer','Buurgerstraat', '11223344', 'type', 'field', 'COC', 'Netherlands','Amsterdam', 'http://', 'email@email.com'),
//   (8, 'Delloite','Nieuwmarket', '11223344', 'type', 'field', 'COC', 'Japan', 'Tokyo', 'http://', 'simple@simple.com'),
//    (9, 'KPMG','Prinsegraht', '11223344', 'type', 'field', 'COC', 'North Korea', 'Seoul', 'http://', 'third@email.com');
 //
 //   insert into users (id, email, password, role, approved, profile_id) values
 // (23, 'email@email.com', '00000000', 'buyer', true, 7),
 // (25, 'email@email.com', '00000000', 'buyer', true, 7),
 // (26, 'email@email.com', '00000000', 'buyer', true, 7),
 // (27, 'email@email.com', '00000000', 'buyer', true, 7),
 // (28, 'email@email.com', '00000000', 'buyer', true, 7),
 // (29, 'email@email.com', '00000000', 'buyer', true, 7),
 // (30, 'email@email.com', '00000000', 'buyer', true, 7),
 // (8, 'simple@simple.com', '1111111','buyer', true, 8),
 // (9, 'third@email.com', '2222222', 'seller', true, 9),
 // (12, 'simple@simple.com', '1111111','buyer', true, 8),
 // (13, 'third@email.com', '2222222', 'seller', true, 9);
