import { VanillaCalendar } from 'vanilla-calendar-picker';
import { IOptions } from 'vanilla-calendar-picker/types';
import 'vanilla-calendar-picker/build/vanilla-calendar.min.css';

const options: IOptions = {
  settings: {
    lang: 'de-AT', // Austrian-German
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
