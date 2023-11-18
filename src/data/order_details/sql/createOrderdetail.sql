INSERT INTO [dbo].[order_details]
    (
        [user_id],
        [product_id],
        [product_size],
        [price],
        [quantity]
    )
VALUES 
    (
        @user_id,
        @product_id,
        @product_size,
        @price,
        @quantity
    )

SELECT * FROM [dbo].[order_details]