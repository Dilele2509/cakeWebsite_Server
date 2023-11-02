INSERT INTO [dbo].[products]
    (
        [category_id],
        [title],
        [price],
        [size],
        [size_price],
        [ingredients],
        [discount_price],
        [thumbnail],
        [description],
        [quantity],
        [total],
        [deleted]
    )
VALUES 
    (
        @category_id,
        @title,
        @price,
        @size,
        @size_price,
        @ingredients,
        @discount_price,
        @thumbnail,
        @description,
        @quantity,
        @total,
        @deleted
    )

SELECT * FROM [dbo].[products]
WHERE [id]=id