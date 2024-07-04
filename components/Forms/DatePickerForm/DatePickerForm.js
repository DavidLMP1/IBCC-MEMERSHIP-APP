import { View, Text } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import React, { useState } from "react";
import { Modal } from "../../Shared";

export default function DatePickerForm(props) {
  const { show, close, formik, date, setDate } = props;
  const [initialDate, setInitialDate] = useState(dayjs());

  const saveDate = (params) => {
    const dateFormat = params.date.format('YYYY-MM-DD');
    setDate(dateFormat);
    setInitialDate(params.date);
    formik.setFieldValue("birthday", dateFormat);

    close();
  };
  return (
    <Modal show={show} close={close}>
      <DateTimePicker mode="single" date={initialDate} onChange={saveDate} />
    </Modal>
  );
}
