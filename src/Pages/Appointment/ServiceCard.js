import React from 'react';

const ServiceCard = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl py-4">
            <div class="card-body">
                <h2 class="text-center text-secondary text-xl mb-2 font-medium">{name}</h2>
                <p className='text-center text-sm mb-3'>{
                    slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500 text'>No slot available. Try another date.</span>
                }</p>
                <p className='text-center text-sm mb-3.5'>{slots.length} {slots.length > 1 ? "spaces" : "space"} Available</p>
                <div class="card-actions justify-center">

                    <label for="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;