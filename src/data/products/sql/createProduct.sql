INSERT INTO [dbo].[products]
    (
        [category_id],
        [title],
        [price],
        [size],
        [ingredients],
        [discount_price],
        [description],
        [quantity],
        [deleted]
    )
VALUES 
    (
        @category_id,
        @title,
        @price,
        @size,
        @ingredients,
        @discount_price,
        @description,
        @quantity,
        0
    )

SELECT * FROM [dbo].[products]
WHERE [id]=SCOPE_IDENTITY();