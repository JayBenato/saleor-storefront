import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { OnDeliveryPaymentGateway } from ".";

const processPayment = action("processPayment");

storiesOf("@components/organisms/DummyPaymentGateway", module)
  .addParameters({ component: OnDeliveryPaymentGateway })
  .add("default", () => (
    <OnDeliveryPaymentGateway processPayment={processPayment} />
  ));
