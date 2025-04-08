
import { ReactNode } from "react";
import { ScreenNames } from "./screenNames";

export interface CustomContact {
  lastMessageType: string;
  lastMessage: ReactNode;
  id: string;
  name: string;
  phoneNumber: number;
  profileImg: string;
  color: string;
}

export type RootStackParamList = {
    [ScreenNames.Home]: undefined;
    [ScreenNames.Signin]: undefined;
    [ScreenNames.Signup]: undefined;
    [ScreenNames.Add]: undefined;
    [ScreenNames.BottomTab]:undefined;
    [ScreenNames.Category]:undefined;
    [ScreenNames.Details]:undefined;
    [ScreenNames.Notify]:undefined;
    [ScreenNames.Profile]:undefined;
    [ScreenNames.Save]:undefined;
    [ScreenNames.ScreenShare]:undefined;
    [ScreenNames.Voice]:undefined;
    [ScreenNames.Setting]:undefined;
    [ScreenNames.GroupChat]:undefined;
    [ScreenNames.Splash]:undefined;
    [ScreenNames.Login]:undefined;
    [ScreenNames.Tutorial]:undefined;
    [ScreenNames.Otp]:undefined;
    [ScreenNames.Searching]:undefined;
    [ScreenNames.Post]:undefined;
    [ScreenNames.Scanner]:undefined;
    [ScreenNames.DealerSearch]:undefined;
    [ScreenNames.Stream]:undefined;
    [ScreenNames.Role]:undefined;
    [ScreenNames.newArrivals]:undefined;
    [ScreenNames.GenratorProductListing]:undefined;
    [ScreenNames.UserChat]: { 
      selectedUser?: CustomContact; 
    };
    
    [ScreenNames.Search]: undefined;  
    [ScreenNames.Chat]: { roomId: string; selectedUser: CustomContact }; 
    [ScreenNames.GroupChatting]: { roomId: string }; 
    [ScreenNames.ProductDetailPage]:undefined
    [ScreenNames.Training]:undefined
    [ScreenNames.WebViewScreen]:{url:undefined}
    [ScreenNames.RetailerFormScreen]:undefined
    [ScreenNames.EquipmentTraining]:undefined

  };