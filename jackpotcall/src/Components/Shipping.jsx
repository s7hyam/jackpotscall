import React from 'react'
import PageMaker from './PageMaker'

export default function Shipping() {
    return (
        <PageMaker
            pageTitle={'Shipping and Delivery'}

            paragraphs={[
                "No Shipping and Delivery Required.",

                "After payment, please follow the instructions as on the Payment Methods page. Your subscription will be activated within 48 hours. You are subscribing to SMS tips, therefore no shipping/delivery is required."
            ]}
        />
    )
}
