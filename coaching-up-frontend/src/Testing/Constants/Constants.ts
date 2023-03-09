import { UserInfo } from '../../Types/UserTypes';
import { AllListings, ListingBody, ListingInfo } from '../../Types/ListingTypes';
import { AccountType, ListingInteractionMethod, TimeIntervals } from '../../Types/EnumTypes';
import { CoachInfo } from '../../Types/CoachTypes';
import { PriceInfo } from '../../Types/PriceTypes';

const user1 : UserInfo  = {userId: 1, userName: "Max", userType: AccountType.Client};
const coach : CoachInfo = {coachFirstName: "john", coachLastName: "wick"};
const priceInfo : PriceInfo = {price: 100.4, interval: TimeIntervals.Session};
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis volutpat nulla, vitae cursus felis tincidunt in. Suspendisse sed sapien et sem hendrerit porttitor. Cras maximus, velit sit amet vestibulum malesuada, libero massa vestibulum urna, condimentum commodo lacus nibh non lacus. Maecenas tempus suscipit turpis, in varius est fringilla vitae. In vel pretium nisl. Duis sodales tellus id magna dignissim, sed pharetra sapien venenatis. In hac habitasse platea dictumst. Etiam sed tortor sagittis, pulvinar leo at, sollicitudin ante. Mauris bibendum non tortor sed egestas."
const listingBody : ListingBody = {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis", description: description, interactionMethod: ListingInteractionMethod.Hybrid, coach: coach, price: priceInfo};
const listingBody1 : ListingBody = {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis", description: description, interactionMethod: ListingInteractionMethod.InPerson, coach: coach, price: priceInfo};
const listing1 : ListingInfo = {listingId: "3", listingDate: new Date(), listingBody: listingBody };
const listing2 : ListingInfo = {listingId: "4", listingDate: new Date(), listingBody: listingBody1 };
const LISTINGS : AllListings = {user: user1, listings: [listing1, listing2]}; 

export { LISTINGS, coach, user1, priceInfo };