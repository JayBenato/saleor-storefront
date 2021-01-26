import { Formik } from "formik";
import React from "react";
import { FormattedMessage } from "react-intl";

import { ErrorMessage, Radio } from "@components/atoms";
import { Money } from "@components/containers";
import { checkoutMessages } from "@temp/intl";

import * as S from "./styles";
import { IProps } from "./types";

/**
 * Shipping method selector used in checkout.
 */
const CheckoutShipping: React.FC<IProps> = ({
  shippingMethods,
  selectedShippingMethodId,
  selectShippingMethod,
  errors,
  formId,
  formRef,
}: IProps) => {
  return (
    <S.Wrapper>
      <section>
        <S.Title data-test="checkoutPageSubtitle">
          <FormattedMessage {...checkoutMessages.shippingMethod} />
        </S.Title>
        <Formik
          initialValues={{
            shippingMethod: selectedShippingMethodId,
          }}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => {
            if (selectShippingMethod && values.shippingMethod) {
              selectShippingMethod(values.shippingMethod);
            }
            setSubmitting(false);
          }}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            setFieldValue,
            setFieldTouched,
          }) => {
            return (
              <S.ShippingMethodForm
                id={formId}
                ref={formRef}
                onSubmit={handleSubmit}
              >
                {shippingMethods.map(({ id, name, price }, index) => {
                  const checked =
                    !!values.shippingMethod && values.shippingMethod === id;

                  return (
                    <S.Tile
                      checked={checked}
                      key={id}
                      data-test="shippingMethodTile"
                      data-test-id={id}
                    >
                      <Radio
                        name="shippingMethod"
                        value={id}
                        checked={checked}
                        customLabel
                        onChange={() => setFieldValue("shippingMethod", id)}
                      >
                        <S.TileTitle>
                          <span data-test="checkoutShippingMethodOptionName">
                            {name}
                          </span>
                          <S.Price>
                            {" "}
                            | +
                            <Money
                              data-test="checkoutShippingMethodOptionPrice"
                              money={price}
                            />
                          </S.Price>
                        </S.TileTitle>
                      </Radio>
                    </S.Tile>
                  );
                })}
                <ErrorMessage errors={errors} />
              </S.ShippingMethodForm>
            );
          }}
        </Formik>
      </section>
      <S.Divider />
      <section>
        <S.Title>
          <FormattedMessage defaultMessage="Informazioni sulla spedizione" />
        </S.Title>
        <S.SubTitle>Italia</S.SubTitle>
        <S.List>
          <li>Costo Spedizione €8,00</li>
          <li>Spedizione GRATUITA per ordini superiori a €60,00</li>
          <li>Tempi Spedizione 1-3 giorni lavorativi</li>
        </S.List>
        <S.SubTitle>
          Austria, Belgio, Francia, Germania, Olanda, Spegna e Svizzera
        </S.SubTitle>
        <S.List>
          <li>Costo Spedizione €10,00</li>
          <li>Spedizione GRATUITA per ordini superiori a €250,00</li>
          <li>Tempi Spedizione 5-7 giorni lavorativi</li>
        </S.List>
        <S.SubTitle>Resto Europa</S.SubTitle>
        <S.List>
          <li>Costo Spedizione €25,00</li>
          <li>Spedizione GRATUITA per ordini superiori a €250,00</li>
          <li>Tempi Spedizione 5-7 giorni lavorativi</li>
        </S.List>
        <S.SubTitle>Regole Sulla Restituzione</S.SubTitle>
        <S.List>
          <li>
            Restituzioni GRATUITE entro 30 giorni dalla ricezione
            dell&apos;ordine
          </li>
          <li>
            La merce potrà essere resa solamente se in perfette condizioni
          </li>
          <li>
            I termini andrano definiti con TodaJoia prima della spedizioni
          </li>
        </S.List>
      </section>
    </S.Wrapper>
  );
};

export { CheckoutShipping };
