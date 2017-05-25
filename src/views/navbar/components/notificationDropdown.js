// @flow
import React from 'react';
// $FlowFixMe
import pure from 'recompose/pure';
// $FlowFixMe
import compose from 'recompose/compose';

import { displayLoadingState } from '../../../components/loading';
import { getNotifications } from '../../notifications/queries';
import Dropdown from '../../../components/dropdown';
import { NullState } from '../../../components/upsell';
import { Button } from '../../../components/buttons';
import { DropdownHeader, DropdownFooter } from '../style';

const NullNotifications = () => (
  <NullState
    bg="notification"
    heading={`No notifications`}
    copy={`You're all good! 🎉`}
  />
);

const NotificationListPure = () => {
  return (
    <div>
      👍 cool. there's notifications here. maybe just, like, actually do the code for it.
    </div>
  );
};

const NotificationList = compose(getNotifications, displayLoadingState)(
  NotificationListPure
);

const NotificationDropdownPure = ({ data }) => {
  const { notifications } = data;
  return (
    <Dropdown>
      <DropdownHeader>
        My Notifications
      </DropdownHeader>
      {!notifications && !data.loading && <NullNotifications />}
      {(notifications || data.loading) && <NotificationList />}
      <DropdownFooter>
        <Button to={'/notifications'}>View all</Button>
      </DropdownFooter>
    </Dropdown>
  );
};

export const NotificationDropdown = compose(getNotifications, pure)(
  NotificationDropdownPure
);