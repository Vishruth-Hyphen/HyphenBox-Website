
interface CalendarSchedulingButton {
  load: (options: {
    url: string;
    color: string;
    label: string;
    target: HTMLElement;
  }) => void;
}

interface CalendarAPI {
  schedulingButton: CalendarSchedulingButton;
}

interface Window {
  calendar?: CalendarAPI;
}
