

const ShippingPolicy = () => {
    return (
      <div className="mb-16">
        <h2 className="text-4xl text-center font-bold mt-12 mb-14">
          Shipping policy
        </h2>
        <div className="ml-4 mr-4 md:ml-36 lg:ml-48 md:mr-36 lg:mr-48 ">
          <h4 className="text-xl font-normal mb-6">Delivery Time</h4>
          <p className="mb-6">
            Standard delivery time is between 7 to 10 working days for regular
            orders but for corporate and special cases it may take much time. As
            we produce products on-demand that’s why delivery time may vary
            depending on factory workload. However, the customers will be
            informed regarding the delivery timeline.
          </p>
          <h4 className="text-xl font-normal mb-2">Delivery Delay</h4>
          <p className="mb-6">
            The delivery date may change for any unavoidable circumstances or
            covid-19 lockdown.
          </p>
          <h4 className="text-xl font-normal mb-6">Delivery Method:</h4>
          <p className="mb-6">
            Inside Dhaka city, we do provide home delivery and provide free
            assembly (Except wall mounting) using our /third party transport.
            For outside Dhaka city we do provide door to door shipping, in that
            case, we don’t provide assemble service physically but we do help to
            assemble via video call if required.
          </p>
          <h4 className="text-xl font-normal mb-2">Assembling</h4>
          <p className="mb-6">
            In Dhaka city, customers will get fitting service on the same day of
            delivery. For outside Dhaka delivery customers, self-assembly is
            required.
          </p>
          <h4 className="text-xl font-normal mb-2">Mode of Payment</h4>
          <p className="mb-6">
            For the range of shopping up to BDT Fifty Thousand order the 10%
            payment has to pay on order as confirmation payment, rest have to
            pay one the same day of delivery. For the above shopping volume and
            corporate order, the confirmation money amount is 50% of the total
            shopping volume.
          </p>
          <h4 className="text-xl font-normal mb-2">
            Order Change or cancellation
          </h4>
          <p className="mb-6">
            Regular orders can be changed or cancelled within 2 days. A
            cancellation charge is applicable depending on work progress.
          </p>
          <h4 className="text-xl font-normal mb-2">Service Warranty</h4>
          <p className="mb-6">
            1-year free service Warranty for any manufacturing fault. No
            warranty/guarantee for glass, fabric and artificial leather.
          </p>
          <h4 className="text-xl font-normal mb-2">Delay Penalty</h4>
          <p className="mb-6">
            MistryTech will pay a delayed penalty valuing 0.5% of the value of
            the goods per week if the delivery is not done within the standard
            deadline. However, there will be 7 days buffer before any such
            penalty is applied.
          </p>
          <h4 className="text-xl font-normal mb-2">
            Inventory Holding Cost
          </h4>
          <p className="mb-6">
            The customer will pay inventory holding cost valuing 0.5% of the
            value of the goods per week if the customer doesn’t take delivery of
            the completed goods. However, there will be 7 days buffer before any
            such cost becomes due.
          </p>
        </div>
      </div>
    );
};

export default ShippingPolicy;